import React from 'react';

const ProductReview = (props) => {
    const { review } = props;
    let created = new Date(review.created);
    return (
        <div>
            <div>{review.account}</div>
            <div>{review.content}</div>
            <div>{created.getMonth() + 1}/{created.getDate()} &nbsp;
                 {created.getHours()}:{created.getMinutes()}
            </div>
        </div>
    );
};

export default ProductReview;