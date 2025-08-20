import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, StarIcon } from './Icon';

const ProductSummaryCard = ({ product, onShowDetails }) => (
  <motion.div
    layoutId="product-card"
    className="product-summary-card"
    onClick={onShowDetails}
  >
    <div className="summary-content">
      <div className="summary-layout">
        <motion.img
          layoutId="product-image"
          src={product.imageUrl}
          alt={product.name}
          className="summary-image"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/cccccc/ffffff?text=Image+Error'; }}
        />
        <div className="summary-details">
          <motion.h2 layoutId="product-name" className="summary-title">{product.name}</motion.h2>
          <p className="summary-description">{product.description}</p>
          <div className="summary-rating">
            <div className="stars-container">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled={i < Math.round(product.rating)} />
              ))}
            </div>
            <span className="rating-text">{product.rating.toFixed(1)} ({product.reviews.length} reviews)</span>
          </div>
        </div>
        <div className="summary-chevron">
            <ChevronRightIcon />
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProductSummaryCard;