package kr.hs.dgsw.shopping_back.Service;

import kr.hs.dgsw.shopping_back.Domain.Menu;

import java.util.List;

public interface MenuService {
    List<Menu> findAll();
    Menu findById(Long id);
}
