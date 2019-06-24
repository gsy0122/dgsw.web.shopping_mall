package kr.hs.dgsw.shopping_back.Service;

import kr.hs.dgsw.shopping_back.Domain.Event;
import kr.hs.dgsw.shopping_back.Domain.EventMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {
    @Autowired
    EventMapper eventMapper;
    @Override
    public List<Event> findAll() {
        return eventMapper.findAll();
    }

    @Override
    public Event findById(Long id) {
        return eventMapper.findById(id);
    }
}
