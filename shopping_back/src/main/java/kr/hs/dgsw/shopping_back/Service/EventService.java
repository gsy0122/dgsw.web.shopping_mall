package kr.hs.dgsw.shopping_back.Service;

import kr.hs.dgsw.shopping_back.Domain.Event;

import java.util.List;

public interface EventService {
    List<Event> findAll();
    Event findById(Long id);
}
