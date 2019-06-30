package kr.hs.dgsw.shopping_back.Domain;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CartMapper {
    Long add(Cart cart);
    int modify(Cart cart);
    int deleteById(@Param("id") Long id);
    int deleteByUserId(@Param("userId") Long userId);
    Cart findById(@Param("id") Long id);
    List<Cart> findByUserId(@Param("userId") Long userId);
}
