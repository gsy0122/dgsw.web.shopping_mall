package kr.hs.dgsw.shopping_back.Controller;

import kr.hs.dgsw.shopping_back.Domain.SubMenu;
import kr.hs.dgsw.shopping_back.Service.SubMenuService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SubMenuController {
    @Autowired
    SubMenuService subMenuService;

    @GetMapping(value = "/api/subMenu/menuId")
    public List findByMenuId(@Param("menuId") Long menuId) {
        return subMenuService.findByMenuId(menuId);
    }

    @GetMapping(value = "/api/subMenu/id")
    public SubMenu findById(@Param("id") Long id) {
        return subMenuService.findById(id);
    }
}
