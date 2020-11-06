import React from 'react';
import unsplashApi from '../../apis/unsplashApi';
import { connect } from 'react-redux';

import { fetchImages } from '../../actions';

class PostList extends React.Component {
  componentDidMount = () => {
    this.props.fetchImages();
  };

  renderPosts = () => {
    return this.props.images.map((image) => {
      return (
        <div className="card" key={image.id}>
          <div className="image">
            <img src={image.urls.small} className="picture" />
          </div>
          <div className="content">
            <div className="header">{image.user.name}</div>
            <div className="meta">
              <a>Friends</a>
            </div>
            <div className="description">{image.user.bio}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="heart icon"></i>
              {`${image.likes} Likes`}
            </span>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "40px" }}>
        <div className="ui link cards">{this.renderPosts()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { images: state.images };
}

export default connect(mapStateToProps, { fetchImages })(PostList);


//  fetchImages = async () => {
//    const results = await unsplashApi.get("/search/photos");

//    console.log(results);
//  };

{/* <button onClick={() => this.diocane()}>immagini</button>; */}
