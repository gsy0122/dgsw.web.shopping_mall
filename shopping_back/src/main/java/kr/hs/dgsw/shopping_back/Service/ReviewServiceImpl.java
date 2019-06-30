package kr.hs.dgsw.shopping_back.Service;

import kr.hs.dgsw.shopping_back.Domain.Review;
import kr.hs.dgsw.shopping_back.Domain.ReviewMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    ReviewMapper reviewMapper;

    @Override
    public Long add(Review review) {
        System.out.println(review);
        return reviewMapper.add(review);
    }

    @Override
    public int deleteById(Long id) {
        return reviewMapper.deleteById(id);
    }

    @Override
    public List<Review> findByProductId(Long productId) {
        return reviewMapper.findByProductId(productId);
    }
}
