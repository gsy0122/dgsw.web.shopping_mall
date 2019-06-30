package kr.hs.dgsw.shopping_back.Domain;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ReviewMapper {
    Long add(Review review);
    int deleteById(@Param("id") Long id);
    List<Review> findByProductId(@Param("productId") Long productId);
}
