import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export const StarRating = ({ rating }: { rating?: string }) => {
    if (rating === undefined) {
        return null;
    }
    let numericRating = parseFloat(rating);
    let maxRating = 5;

    // Check if the rating is out of 10
    if (rating?.includes('/')) {
        const parts = rating.split('/');
        numericRating = parseFloat(parts[0]) / 2; // Convert to out of 5
        maxRating = 5;
    }

    // Calculate the number of full stars and the fractional part for the half star
    const fullStars = Math.floor(numericRating);
    const remainder = numericRating % 1;
    const hasHalfStar = remainder >= 0.25 && remainder < 0.75;
    const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

    return (
        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            {[...Array(fullStars)].map((_, index) => (
                <FaStar key={index} size={24} color="#F2C265" />
            ))}
            {hasHalfStar && (
                <div style={{ position: 'relative' }}>
                    <FaStarHalfAlt size={24} color="#F2C265" />

                </div>
            )}
            {[...Array(emptyStars)].map((_, index) => (
                <FaStar key={index + fullStars + (hasHalfStar ? 1 : 0)} size={24} color="#a9a9a9" />
            ))}
        </div>
    );
};
