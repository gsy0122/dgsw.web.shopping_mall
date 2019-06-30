package kr.hs.dgsw.shopping_back.Controller;

import kr.hs.dgsw.shopping_back.Domain.Review;
import kr.hs.dgsw.shopping_back.Service.ReviewService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReviewController {

    @Autowired
    ReviewService reviewService;

    @PostMapping("/api/review")
    public Long add(@RequestBody Review review) {
        return reviewService.add(review);
    }

    @DeleteMapping("/api/review")
    public int deleteById(@Param("id") Long id) {
        return reviewService.deleteById(id);
    }

    @GetMapping("/api/review/productId")
    public List<Review> findByMenuId(@Param("productId") Long productId) {
        return reviewService.findByProductId(productId);
    }

}
