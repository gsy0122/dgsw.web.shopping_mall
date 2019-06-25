package kr.hs.dgsw.shopping_back.Service;

import kr.hs.dgsw.shopping_back.Domain.SubMenu;

import java.util.List;

public interface SubMenuService {
    List<SubMenu> findAll();
    SubMenu findById(Long id);
}
