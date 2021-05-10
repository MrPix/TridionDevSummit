import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
import "./assets/css/owl.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";

function ArticleImage(props) {
  let { imageId } = props;
  var r = /tcm:\d+-(?<itemId>\d+)/;
  var t = r.exec(imageId);
  imageId = t.groups.itemId;
  return (
    <Query
      query={gql`
          {
            binaryComponent(namespaceId: 1, publicationId: 1, binaryId: ${imageId}) {
              title
              multiMedia
              schemaId
              variants {
                edges {
                  node {
                    binaryId
                    description
                    downloadUrl
                    path
                    type
                    url
                    variantId
                  }
                }
              }
            }
          }
          `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
        const imageUrl =
          data.binaryComponent.variants.edges[0].node.downloadUrl;
        return <img src={imageUrl} alt="" />;
      }}
    </Query>
  );
}
export default ArticleImage;
