package kr.hs.dgsw.shopping_back.Controller;

import kr.hs.dgsw.shopping_back.Domain.Cart;
import kr.hs.dgsw.shopping_back.Service.CartService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CartController {
    @Autowired
    CartService cartService;

    @PostMapping(value = "/api/cart")
    public Long add(@RequestBody Cart cart) {
        return cartService.add(cart);
    }

    @PutMapping(value = "/api/cart")
    public int modify(@RequestBody Cart cart) {
        return cartService.modify(cart);
    }

    @DeleteMapping(value = "/api/cart")
    public int deleteById(@Param("id") Long id) {
        return cartService.deleteById(id);
    }

    @GetMapping(value = "/api/cart/id")
    public Cart findById(@Param("id") Long id) {
        return cartService.findById(id);
    }

    @GetMapping(value = "/api/cart/userId")
    public List<Cart> findByUserId(@Param("userId") Long userId) {
        return cartService.findByUserId(userId);
    }

}
