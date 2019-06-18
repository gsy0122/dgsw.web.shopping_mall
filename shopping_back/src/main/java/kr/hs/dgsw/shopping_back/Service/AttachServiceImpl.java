package kr.hs.dgsw.shopping_back.Service;

import kr.hs.dgsw.shopping_back.Domain.Attach;
import kr.hs.dgsw.shopping_back.Domain.AttachMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class AttachServiceImpl implements AttachService {
    @Autowired
    AttachMapper attachMapper;

    @Override
    public HashMap findById(Long id) {
        return this.attachMapper.findById(id);
    }

    @Override
    public Long add(Attach post) {
        return this.attachMapper.add(post);
    }

    @Override
    public int modify(Attach post) {
        return this.attachMapper.modify(post);
    }

    @Override
    public int deleteById(Long id) {
        return this.attachMapper.deleteById(id);
    }
}
