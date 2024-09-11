import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CategoryDetail = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);


  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false)
      })
  }, [categoryName]);



  useEffect(() => {
    setFilter(
      products.filter(product =>
        product.category.name === categoryName)
    )
})



if (loading) {
  return (<p>Loading...</p>)
}

return (
  <div>
    <h1>{categoryName} Products</h1>
    <ul>
      {filter.map(product => (
        <div className="separateDiv">
          <Link to={`/products/${product.id}`}>
            <img src={product.images} />
          </Link>
          <div className='content'>
            <h3 className='p_title'>{product.title}</h3>
            <p>Category: {product.category.name}</p>
            <p className='p_description'>{product.description}</p>
            <p className='price'>price <br /> {product.price} $</p>
          </div>
        </div>
      ))}
    </ul>
  </div>
);
};

export default CategoryDetail;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const CategoryDetail = () => {
//   // const { categoryName } = useParams();
//   // const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [categories, setCategories] = useState([]);


//   useEffect(() => {
//     axios.get('https://api.escuelajs.co/api/v1/categories')
//       .then(response => {
//         setCategories(response.data);
//         setLoading(false)
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//         setLoading(false)
//       })
//   });



// //   useEffect(() => {
// //     setFilter(
// //       products.filter(product =>
// //         product.category.name === categoryName)
// //     )
// // })



// if (loading) {
//   return (<p>Loading...</p>)
// }

// return (
//   <div>
//     <h1>{categories.name} Products</h1>
//     <ul>
//       {categories.map(product => (
//         <div className="separateDiv">
//           <Link to={`/products/${product.id}`}>
//             <img src={product.images} />
//           </Link>
//           <div className='content'>
//             <h3 className='p_title'>{product.title}</h3>
//             <p>Category: {product.category.name}</p>
//             <p className='p_description'>{product.description}</p>
//             <p className='price'>price <br /> {product.price} $</p>
//           </div>
//         </div>
//       ))}
//     </ul>
//   </div>
// );
// };

// export default CategoryDetail;
