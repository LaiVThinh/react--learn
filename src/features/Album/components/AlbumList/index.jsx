import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";
import { useNavigate } from "react-router-dom";
AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList(props) {
  const { albumList } = props;
  const navigate = useNavigate();

  return (
    <ul className="album-list">
      {albumList.map((album) => (
        <li
          key={album.id}
          onClick={() => {
            navigate("/album/" + album.id);
          }}
        >
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
