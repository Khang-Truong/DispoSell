import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import localStyles from '../../scss/pages/ProductDetail.module.scss';
import ProductService from "../services/product.service";

function ProductDetail() {
    const params=useParams();
    const [productDetail, setProductDetail] = useState({});
    useEffect(() => {
        console.log(params.id);
        ProductService.getProductDetail(params.id).then(
            response => {
                console.log(response.data);
                setProductDetail(response.data);
            },
            error => {
                setProductDetail(
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString()
                );

                if (error.response && (error.response.status == 401 || error.response.status == 403)) {
                    navigate("/");
                }
            }
        )
    },[]);
    return (
        <div className={localStyles["product-detail-page"]}>
            <div className={`align-self-center ${localStyles["float_left"]}`} style={{marginBottom:"10rem"}}>
                <h6 className='text-uppercase fw-bold'> {productDetail.name} </h6>
                <p>{productDetail.description}</p>
            </div>

            <div className={localStyles["middleSection"]}>
                <div className='col-md-3 col-lg-3 col-xl-3 align-items-center text-start' style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    minWidth:"50%",
                    maxWidth: "100%",
                }}>

                    {productDetail.productMedia?.map((media)=>(
                        <img src={`${media.url}`} alt={productDetail.name} width={250}
                             loading="lazy"
                             style={{
                                 display: "block",
                                 marginLeft: "auto",
                                 marginRight: "auto",
                                 minWidth:"50%",
                                 maxWidth: "100%",
                             }}/>
                    ))}
                    {/*<img src="/images/products/4.jpeg" alt={productDetail.name} width={250}*/}
                    {/*     loading="lazy"*/}
                    {/*     style={{*/}
                    {/*         display: "block",*/}
                    {/*         marginLeft: "auto",*/}
                    {/*         marginRight: "auto",*/}
                    {/*         minWidth:"50%",*/}
                    {/*         maxWidth: "100%",*/}
                    {/*     }}/>*/}
                </div>
            </div>

            <div className={`align-self-center ${localStyles["float_right"]}`} style={{marginBottom:"10rem"}}>
                <h5> ${productDetail.sellingPrice}</h5>
                <button className={`mb-4 ${localStyles["btnToCart"]}`}>ADD TO CART</button>
            </div>

            <div className={` ${localStyles["showMobileOnly"]}`}
                 style={{marginBottom: "5rem", padding: "1rem", position:"fixed"}}>
                <h6 className='text-uppercase fw-bold'> {productDetail.name} </h6>
                <p>{productDetail.description}</p>
                <h5> ${productDetail.sellingPrice}</h5>
                <button className={`mb-4 ${localStyles["btnToCart"]}`}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductDetail;