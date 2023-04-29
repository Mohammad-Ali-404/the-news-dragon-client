/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Card, Button, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { BiBookmark, BiShareAlt } from "react-icons/bi";
import { FaEye, FaRegStar, FaStar } from "react-icons/fa";
import moment from 'moment';
import Rating from 'react-rating';

const NewsCard = ({news}) => {
    const {title, _id, details, image_url, author, rating, total_view } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex'>

                        <Image className='mt-2' style={{height: '40px', width:'40px'}} src={author?.img} roundedCircle />
                        <div className='ps-2  flex-grow-1'>
                            <h5>{author.name}</h5>
                            <p><small>{moment(author.published_date).format('yyyy-MM-D')}</small></p>
                        </div>

                    <div style={{fontSize:'20px'}}>
                       <Link> <BiBookmark /></Link>
                       <Link> <BiShareAlt /></Link>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img src={image_url} alt="Card image" />
                    <Card.Text>
                    {details.length < 200 ? <>{details}</> :
                    <>{details.slice(0, 200)}...<Link to={`/news/${_id}`}>Read More</Link></>
                    }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        >   
                        </Rating>
                        <p>{rating?.number}</p>
                    </div>
                    <div>
                        <FaEye />{total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;