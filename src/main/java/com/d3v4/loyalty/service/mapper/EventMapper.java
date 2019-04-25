package com.d3v4.loyalty.service.mapper;

import com.d3v4.loyalty.domain.*;
import com.d3v4.loyalty.service.dto.EventDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Event and its DTO EventDTO.
 */
@Mapper(componentModel = "spring", uses = {LocationMapper.class})
public interface EventMapper extends EntityMapper<EventDTO, Event> {

    @Mapping(source = "location.id", target = "locationId")
    EventDTO toDto(Event event);

    @Mapping(source = "locationId", target = "location")
    @Mapping(target = "eventAttendances", ignore = true)
    Event toEntity(EventDTO eventDTO);

    default Event fromId(Long id) {
        if (id == null) {
            return null;
        }
        Event event = new Event();
        event.setId(id);
        return event;
    }
}
