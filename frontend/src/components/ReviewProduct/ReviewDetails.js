import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { getReview, receiveReview } from "../../store/review";
import { deleteReview } from "../../store/review";
import "./ReviewDetail.css";


function ReviewShowPage() {
  const { reviewId, productId } = useParams();
  const dispatch = useDispatch();





  return (
    <div className="product-review">

    </div>
  );
}

export default ReviewShowPage;