package kr.hs.dgsw.shopping_back.Service;

import kr.hs.dgsw.shopping_back.Domain.Product;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ProductService {
    List<Product> findAll();
    int deleteById(@Param("id") Long id);
    Long add(Product product);
    int modify(Product product);
    Product findById(@Param("id") Long id);
    List<Product> findByMenuId(@Param("menuId") Long menuId);
    List<Product> findBySubMenuId(@Param("subMenuId") Long subMenuId);
    List<Product> findByEventId(@Param("eventId") Long eventId);
}
