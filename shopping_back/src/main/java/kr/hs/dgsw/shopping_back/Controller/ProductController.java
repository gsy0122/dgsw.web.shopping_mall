package kr.hs.dgsw.shopping_back.Controller;

import kr.hs.dgsw.shopping_back.Domain.Product;
import kr.hs.dgsw.shopping_back.Service.ProductService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/api/product/id")
    public Product findById(@Param("id") Long id) {
        return productService.findById(id);
    }

    @GetMapping("/api/product/menuId")
    public List<Product> findByMenuId(@Param("menuId") Long menuId) {
        return productService.findByMenuId(menuId);
    }

    @GetMapping("/api/product/subMenuId")
    public List<Product> findBySubMenuId(@Param("subMenuId") Long subMenuId) {
        return productService.findBySubMenuId(subMenuId);
    }

    @GetMapping("/api/product/eventId")
    public List<Product> findByEventId(@Param("eventId") Long eventId) {
        return productService.findByEventId(eventId);
    }
}
