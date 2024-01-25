    // import image from '../assets/newsImg.jpg'
    const NewsItem =({title, description,src,url}) =>{
    return(
        <div className="card bg-body text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"  style={{maxWidth:"302px"}}>
        <img src={src} style={{height:"200px",width:"280px"} } className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title text-dark">{title.slice(0,50)}</h5>
          <p className="card-text text-body" >{description?description.slice(0,90):"Currently the Description is Aviable! sorry"}</p>
          <a href={url} className="link-opacity-75">Read more</a>
        </div>
      </div>
    );
}
export default NewsItem
