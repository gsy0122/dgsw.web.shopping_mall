package kr.hs.dgsw.shopping_back.Service;

import kr.hs.dgsw.shopping_back.Domain.Attach;

import java.util.HashMap;

public interface AttachService {
    HashMap findById(Long id);
    Long add(Attach attach);
    int modify(Attach attach);
    int deleteById(Long id);
}