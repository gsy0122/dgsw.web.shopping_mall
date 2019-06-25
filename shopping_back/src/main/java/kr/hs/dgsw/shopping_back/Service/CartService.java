package kr.hs.dgsw.shopping_back.Service;

import kr.hs.dgsw.shopping_back.Domain.Cart;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CartService {
    Long add(Cart cart);
    int modify(Cart cart);
    int deleteById(@Param("id") Long id);
    Cart findById(@Param("id") Long id);
    List<Cart> findByUserId(@Param("userId") Long userId);
}
