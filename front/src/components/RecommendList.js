import React, { useState, useEffect } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import "../css/RecommendList.css";
import TrackCategory from "./TrackCategory";
import TrackInfo from "./TrackInfo";

const playlist = {
    'id':'1',
    'name':'',
    'tracks': [
        {'id':'1', 'title':'title1', 'artist':'qasdf234we', 'album':'123'},
        {'id':'2', 'title':'asdqwr', 'artist':'qqwewe', 'album':'123'},
        {'id':'3', 'title':'asdasxcb', 'artist':'qwerwe', 'album':'123'},
        {'id':'4', 'title':'asqwzxd', 'artist':'qasdfwe', 'album':'123'},
        {'id':'5', 'title':'asfagrfhtgykd', 'artist':'asdfzxcqwe', 'album':'123'},
        {'id':'6', 'title':'asert2d', 'artist':'qwetwewe', 'album':'123'},
        {'id':'7', 'title':'werwerasd', 'artist':'qxcvnswe', 'album':'123'},
        {'id':'8', 'title':'xcvbasd', 'artist':'qwdfgjde', 'album':'123'},
        {'id':'9', 'title':'asdghasd', 'artist':'qertewwe', 'album':'123'},
        {'id':'10', 'title':'qweasdasd', 'artist':'sdfgsqwe', 'album':'123'},
        {'id':'11', 'title':'asgdxcbasd', 'artist':'qsdfhcvwe', 'album':'123'},
        {'id':'12', 'title':'dafydryasd', 'artist':'qxcvbwwe', 'album':'123'},
        {'id':'13', 'title':'xcvbasd', 'artist':'qweasfqwe', 'album':'123'},
        {'id':'14', 'title':'werqasd', 'artist':'ngdfqwe', 'album':'123'},
    ]
}


function RecommendList(props) {
    return(
        <div className="recommend__list">
            <div className="recommend__title">
                RECOMMEND LIST
            </div>
            <div className="setting__button">
                <button>
                    <IoSettingsOutline className="setting__icon" size='24' />
                </button>
            </div>

            <div className="recommend__tracks">
                <div className="recommend__track__category">
                    <TrackCategory />
                </div>
                <div className="recommend__track__list">
                    {playlist.tracks && playlist.tracks.map((track, index) => (
                        <TrackInfo track={track} order={index+1} />
                    ))}
                </div>    
            </div>

        </div>
    );
}
export default RecommendList;