package kr.hs.dgsw.shopping_back.Domain;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;

@Mapper
public interface AttachMapper {
    HashMap findById(Long id);
    Long add(Attach attach);
    int modify(Attach attach);
    int deleteById(Long id);
}
