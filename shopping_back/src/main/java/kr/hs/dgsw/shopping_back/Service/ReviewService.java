package kr.hs.dgsw.shopping_back.Service;

import kr.hs.dgsw.shopping_back.Domain.Review;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ReviewService {
    Long add(Review review);
    int deleteById(@Param("id") Long id);
    List<Review> findByProductId(@Param("productId") Long productId);
}
