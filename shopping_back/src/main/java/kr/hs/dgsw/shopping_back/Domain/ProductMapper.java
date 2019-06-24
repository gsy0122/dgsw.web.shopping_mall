package kr.hs.dgsw.shopping_back.Domain;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ProductMapper {
    Long add(Product product);
    int modify(Product product);
    int deleteById(@Param("id") Long id);
    Product findById(@Param("id") Long id);
    List<Product> findByMenuId(@Param("menuId") Long menuId);
    List<Product> findBySubMenuId(@Param("subMenuId") Long subMenuId);
    List<Product> findByEventId(@Param("eventId") Long eventId);
    List<Product> findAll();
}
