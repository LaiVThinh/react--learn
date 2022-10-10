import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeatures.propTypes = {

    
};

function AlbumFeatures(props) {
    const albumList = [
        {
            id: 1,
            name:'Feel Good Acoustic',
            thumbnaiUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2021/11/10/5/a/b/d/1636536230709_300.jpg'
        },
        {
            id: 2,
            name:'Lofi Study',
            thumbnaiUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2021/03/16/c/9/f/9/1615889859623_300.jpg'
        },
        {
            id: 3,
            name:'Fresh & Chill',
            thumbnaiUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2021/10/25/6/2/a/c/1635154814087_300.jpg'
        },
    ];
    return (
        <div>
            <h2>Co the ban se thich </h2>
            <AlbumList albumList = {albumList} />
            
        </div>
    );
}

export default AlbumFeatures;