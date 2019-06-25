package kr.hs.dgsw.shopping_back.Service;

import kr.hs.dgsw.shopping_back.Domain.SubMenu;
import kr.hs.dgsw.shopping_back.Domain.SubMenuMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubMenuServiceImpl implements SubMenuService {
    @Autowired
    SubMenuMapper subMenuMapper;
    @Override
    public List<SubMenu> findAll() {
        return subMenuMapper.findAll();
    }

    @Override
    public SubMenu findById(Long id) {
        return subMenuMapper.findById(id);
    }
}
