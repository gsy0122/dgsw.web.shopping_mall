package kr.hs.dgsw.shopping_back.Controller;

import kr.hs.dgsw.shopping_back.Domain.Event;
import kr.hs.dgsw.shopping_back.Service.EventService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EventController {

    @Autowired
    EventService eventService;

    @GetMapping(value = "/api/event")
    public List findAll() {
        return eventService.findAll();
    }

    @GetMapping(value = "/api/event/id")
    public Event findById(@Param("id") Long id) {
        return eventService.findById(id);
    }
}
