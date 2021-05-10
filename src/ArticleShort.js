import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/fontawesome.css';
import './assets/css/templatemo-sixteen.css';
import './assets/css/owl.css';
import ArticleImage from './ArticleImage';

function ArticleShort(props) {
  const {id, title, shortDescription, imageId} = props;
  return (
    <div className="col-md-3">
    <div className="product-item">
      <a href={"/article/"+id}>
        <ArticleImage imageId = {imageId}></ArticleImage>
      </a>
      <div className="down-content">
        <a href={"/article/"+id}><h4>{title}</h4></a>
        <p>{shortDescription}</p>
      </div>
    </div>
  </div>
  );
}
export default ArticleShort;
