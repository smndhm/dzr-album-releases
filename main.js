'use strict';

const d = document;
const l = d.location;

const app_id = l.host === "smndhm.github.io" ? 255742 : 153461 ;

const $divNotLogged  = d.querySelector("#not-logged");
const $divLogged     = d.querySelector("#logged");
const $loader        = d.querySelector("#load-start");
const $dzReleases    = d.querySelector("#dz-releases");
const $notif         = d.querySelector("#notif");

const dateNow = new Date();

const sto_init_duration    = 1000 * 30;

let si_refresh;

const STR_COMING = "Coming";
const STR_TODAY = "Today";

/**
 * Show unlogged div if Deezer SDK is blocked.
 */
let sto_init = window.setTimeout( () => {

    $divNotLogged.style.display = "block";
    $loader.style.display = "none";

}, sto_init_duration);

/**
 * Init Deezer SDK
 */
DZ.init({
    appId: app_id,
    channelUrl: l.protocol + "//" + l.host + l.pathname + "channel.html",
    player: {
        onload: response => { console.log("DZ.init", response); }
    }
});

/**
 * Get Album Releases
 */
const getAlbumReleases = () => {

    $divLogged.style.display = "block";
    $divNotLogged.style.display = "none";

    // Get Artists
    DZ.api('user/me/artists', {'limit': 2000}, dz_api_response_artists => {

        let index = 0;

        const artists = dz_api_response_artists.data.map( artist => artist.name );
        
        si_refresh = window.setInterval( () => {
            $notif.classList.add("show");
            $notif.textContent = `Checking ${artists[index % artists.length]}...`;
            index += 1;
        }, 400, index, artists.sort( () => 0.5 - Math.random() ), $notif);

        let promises_artist_albums = [];

        // foreach artist
        for (let i in dz_api_response_artists.data) {

            /* create promise */
            let promise_artist_albums = new Promise( (resolve, reject) => {
                
                const dz_artist = dz_api_response_artists.data[i];

                // Get discography
                DZ.api(`artist/${dz_artist.id}/albums`, {'limit': 2000}, dz_api_response_artist_albums => {

                    if (!dz_api_response_artist_albums.error){
                        const albums = dz_api_response_artist_albums.data.map( album => {
                           album.artist = dz_artist;
                           return album;
                        });
                        resolve( albums );
                    }
                    else
                        reject( dz_api_response_artist_albums.error );

                });
            });

            promises_artist_albums.push( promise_artist_albums );

        }

        Promise.all(promises_artist_albums).then( values => {

            // group all albums and sort them by release date DESC
            const albums = [].concat.apply([], values).sort( ( album_1, album_2 ) => {
                //http://www.alex-arriaga.com/how-to-get-same-results-when-sorting-javascript-arrays-in-all-browsers/
                const album_1_release_date = album_1.release_date;
                const album_2_release_date = album_2.release_date;
                const a = album_1_release_date.trim().toLowerCase();
                const b = album_2_release_date.trim().toLowerCase();
                let r = ((a < b) ? 1 : ((a > b) ? -1 : 0));
                if(r === 0){
                    // Next line makes the magic :)
                    r = ( typeof album_1.id !== 'undefined' && typeof album_2.id !== 'undefined' ) ? album_1.id - album_2.id : 0 ;
                }
                return r;
            });

            // group albums by release date
            const date_str = date_to_str( dateNow );

            const release_dates = albums.reduce( ( groups, item ) => {
                const val = date_str > item.release_date ? item.release_date : ( date_str === item.release_date ? STR_TODAY : STR_COMING ) ;
                groups[val] = groups[val] || [];
                groups[val].push(item);
                return groups;
            }, {});

            // stop artist loader
            window.clearInterval( si_refresh );

            $notif.classList.remove("show");

            // get user name
            DZ.api('user/me', user => {
                $notif.textContent = `Hello ${user.name}!`;
            });

            // display
            createReleaseDates( release_dates );

        } );

    });

};

/**
 * Create release block for a day
 */
const createReleaseDates = release_dates => {

    let rlzGroup;
    let rlzTime;
    let rlzGrid;
            
    let album;
    let artist;
    let release_date;
    let timeClass;
    let rlzRow;
    let rlzCover;
    let rlzCoverLink;
    let rlzCoverImg;
    let cover;
    let rlzInfo;
    let rlzAlbum;
    let rlzInfoAlbum;
    let rlzType;
    let rlzInfoArtist;
    let rlzMore;
    let rlzDate;

    for (let date in release_dates) {

        //Create group date release 
        rlzGroup = d.createElement("div");
        rlzGroup.classList.add("rlz-group");
        rlzGroup.classList.add(date.toLowerCase());

        //Title - date
        rlzTime = d.createElement("time");
        rlzTime.textContent = date;
        rlzTime.setAttribute("datetime", date);
        rlzGroup.appendChild(rlzTime);

        //Create Album grid
        rlzGrid = d.createElement("div");
        rlzGrid.classList.add("rlz-grid");

        for (let albums in release_dates[date]) {

            const album = release_dates[date][albums];

            //add row to group
            rlzRow = d.createElement("div");
            rlzRow.classList.add("rlz-row");
            rlzRow.classList.add(album.record_type);
            
            //cover
            rlzCover = d.createElement("div");
            rlzCover.classList.add("rlz-cell");
            rlzCover.classList.add("cell-cover");
            rlzCoverLink = d.createElement("a");
            rlzCoverLink.href = album.link + "?app_id=" + app_id;
            rlzCoverLink.target = "_blank";
            rlzCoverImg = d.createElement("img");
            cover = album.cover !== "" ? album.cover : l.protocol + "//api.deezer.com/album/" + album.id + "/image";
            // rlzCoverImg.src = cover;
            rlzCoverImg.setAttribute("data-src", cover);
            rlzCoverLink.appendChild(rlzCoverImg);
            rlzCover.appendChild(rlzCoverLink);
            rlzRow.appendChild(rlzCover);

            //album infos
            rlzInfo = d.createElement("div");
            rlzInfo.classList.add("rlz-cell");
            rlzInfo.classList.add("cell-infos");

            //album title
            rlzAlbum = d.createElement("span");

            rlzInfoAlbum = d.createElement("a");
            rlzInfoAlbum.classList.add("info-album");
            rlzInfoAlbum.textContent = album.title;
            rlzInfoAlbum.href = album.link + "?app_id=" + app_id;
            rlzInfoAlbum.target = "_blank";
            rlzAlbum.appendChild(rlzInfoAlbum);

            //album type
            rlzType = d.createElement("span");
            rlzType.classList.add("more-type");
            rlzType.textContent = album.record_type;
            rlzAlbum.appendChild(rlzType);

            rlzInfo.appendChild(rlzAlbum);
            rlzRow.appendChild(rlzInfo);

            //artist name
            rlzInfoArtist = d.createElement("a");
            rlzInfoArtist.classList.add("info-artist");
            rlzInfoArtist.textContent = album.artist.name;
            rlzInfoArtist.href = album.artist.link + "?app_id=" + app_id;
            rlzInfoArtist.target = "_blank";
            rlzInfo.appendChild(rlzInfoArtist);

            //
            if (date === "Coming") {
                rlzDate = d.createElement("time");
                rlzDate.textContent = album.release_date;
                rlzDate.setAttribute("datetime", album.release_date);
                rlzInfo.appendChild(rlzDate);
            }

            rlzRow.appendChild(rlzInfo);
            rlzGrid.appendChild(rlzRow);

        }

        //add grid
        rlzGroup.appendChild(rlzGrid);

        //add group
        $dzReleases.appendChild(rlzGroup);

    }

    lazyload( d.querySelectorAll(".cell-cover img") );

};

/**
 * Deezer SDK Ready
 */
DZ.ready( sdk_options => {

    window.clearTimeout( sto_init );

    console.log("DZ.ready", sdk_options);

    DZ.getLoginStatus( login_status => {

        console.log("DZ.getLoginStatus", login_status);

        $loader.style.display = "none";

        if ( !login_status.authResponse || !login_status.authResponse.accessToken ) {

            $divNotLogged.style.display = "block";

        } else {

            getAlbumReleases();

        }

    });

});

const date_to_str = date => date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + ('0' + date.getDate()).slice(-2);

/**
 * Deezer connect
 */
const dzConnect = () => {

    DZ.login( login => {

        console.log("dzConnect", login);

        if (login.authResponse.accessToken) {

            getAlbumReleases();

        }

    }, {perms: "basic_access"});

};