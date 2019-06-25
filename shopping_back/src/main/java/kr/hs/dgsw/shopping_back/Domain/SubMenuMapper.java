package kr.hs.dgsw.shopping_back.Domain;

import java.util.List;

public interface SubMenuMapper {
    List<SubMenu> findAll();
    SubMenu findById(Long id);
}
