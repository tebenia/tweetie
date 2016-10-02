import React from 'react';

const TweetStream = () => (
  <div id="stream" className="container">
    <div className="row">
      <div className="col-md-4 col-lg-3">
        <div id="profile-panel" className="panel panel-default">
          <div className="media panel-body">
            <a href="" className="pull-left" href="#">
              <img className="media-object" src="https://abs.twimg.com/sticky/default_profile_images/default_profile_0_200x200.png" alt="..."/>
            </a>
            <div className="media-body">
              <span className="username"><strong>Tribudi Sabdo Utomo</strong></span><br/>
              <span className="handle"><strong>@tebenia</strong></span>
            </div>
            <table id="profile-stats" className="table">
              <tbody>
                <tr className="head">
                  <td><strong>Tweets</strong></td>
                  <td><strong>Following</strong></td>
                  <td><strong>Followers</strong></td>
                </tr>
                <tr className="numbers">
                  <td>500</td>
                  <td>240</td>
                  <td>1600</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="panel-footer">
            <input type="text" className="form-control" placeholder="Compose a new tweet"/>
          </div>
        </div>
        <div id="trending" className="panel panel-default">
          <div className="panel-body">
            <h4>Trending Topics</h4>
          </div>
          <ul className="list-group">
            <a href="#" className="list-group-item"></a>
            <a href="#" className="list-group-item"></a>
            <a href="#" className="list-group-item"></a>
            <a href="#" className="list-group-item"></a>
            <a href="#" className="list-group-item"></a>
          </ul>
        </div>
      </div>
      <div className="col-md-8 col-lg-6">
        <ul id="tweet-stream" className="list-group">
          <li className="list-group-item">
            <h4 className="list-group-item-heading">Tweets</h4>
          </li>
          <li className="list-group-item tweet">
             <h5 className="tweet-author">Ned Stark <span className="author-info"><a href="#">@nedstark &middot; 18m</a></span></h5>
             <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione facere expedita mollitia draco dormiens. #yum #food</p>
             <span className="expand"><a href="#">Expand</a></span>
             <div className="tweet-options pull-right">
               <button type="button" className="btn btn-default btn-xs"><i className="fa fa-reply"></i> Reply</button>
               <button type="button" className="btn btn-default btn-xs"><i className="fa fa-retweet"></i> Retweet</button>
               <button type="button" className="btn btn-default btn-xs"><i className="fa fa-star"></i> Favorite</button>
             </div>
          </li>
          <li className="list-group-item tweet">
            <h5 className="tweet-author">Ned Stark <span className="author-info"><a href="#">@nedstark &middot; 18m</a></span></h5>
            <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione facere expedita mollitia draco dormiens. #yum #food</p>
            <span className="expand"><a href="#">Expand</a></span>
            <div className="tweet-options pull-right">
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-reply"></i> Reply</button>
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-retweet"></i> Retweet</button>
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-star"></i> Favorite</button>
            </div>
          </li>
          <li className="list-group-item tweet">
            <h5 className="tweet-author">Ned Stark <span className="author-info"><a href="#">@nedstark &middot; 18m</a></span></h5>
            <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione facere expedita mollitia draco dormiens. #yum #food</p>
            <span className="expand"><a href="#">Expand</a></span>
            <div className="tweet-options pull-right">
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-reply"></i> Reply</button>
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-retweet"></i> Retweet</button>
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-star"></i> Favorite</button>
            </div>
          </li>
          <li className="list-group-item tweet">
            <h5 className="tweet-author">Ned Stark <span className="author-info"><a href="#">@nedstark &middot; 18m</a></span></h5>
            <p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione facere expedita mollitia draco dormiens. #yum #food</p>
            <span className="expand"><a href="#">Expand</a></span>
            <div className="tweet-options pull-right">
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-reply"></i> Reply</button>
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-retweet"></i> Retweet</button>
              <button type="button" className="btn btn-default btn-xs"><i className="fa fa-star"></i> Favorite</button>
            </div>
          </li>
          <li className="list-group-item load-more">
            <a href="">Load More Tweets</a>
          </li>
        </ul>
      </div>
      <div id="who-to-follow" className="col-md-8 col-md-offset-4 col-lg-3 col-lg-offset-0">
        <div className="panel panel-default">
          <div className="panel-body">
            <h4>Who to Follow</h4>
          </div>
          <ul className="list-group">
            <a href="#" className="list-group-item">@Niannisa</a>
            <a href="#" className="list-group-item">@Tsurayya</a>
            <a href="#" className="list-group-item">@Gantari</a>
          </ul>
          <div className="panel-footer short">
            <p>Find <a href="">People You May Know</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TweetStream;
