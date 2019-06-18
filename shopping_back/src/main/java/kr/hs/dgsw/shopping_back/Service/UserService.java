package kr.hs.dgsw.shopping_back.Service;

import kr.hs.dgsw.shopping_back.Domain.User;

import java.util.List;

public interface UserService {
    List<User> findAll();
    User findById(Long id);
    User findByAccount(String account);
    int deleteById(Long id);
    Long add(User user);
    int modify(User user);
    User login(User user);
}
