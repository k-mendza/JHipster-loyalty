package com.d3v4.loyalty.service.impl;

import com.d3v4.loyalty.service.EventAttendanceService;
import com.d3v4.loyalty.domain.EventAttendance;
import com.d3v4.loyalty.repository.EventAttendanceRepository;
import com.d3v4.loyalty.service.dto.EventAttendanceDTO;
import com.d3v4.loyalty.service.mapper.EventAttendanceMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing EventAttendance.
 */
@Service
@Transactional
public class EventAttendanceServiceImpl implements EventAttendanceService {

    private final Logger log = LoggerFactory.getLogger(EventAttendanceServiceImpl.class);

    private final EventAttendanceRepository eventAttendanceRepository;

    private final EventAttendanceMapper eventAttendanceMapper;

    public EventAttendanceServiceImpl(EventAttendanceRepository eventAttendanceRepository, EventAttendanceMapper eventAttendanceMapper) {
        this.eventAttendanceRepository = eventAttendanceRepository;
        this.eventAttendanceMapper = eventAttendanceMapper;
    }

    /**
     * Save a eventAttendance.
     *
     * @param eventAttendanceDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public EventAttendanceDTO save(EventAttendanceDTO eventAttendanceDTO) {
        log.debug("Request to save EventAttendance : {}", eventAttendanceDTO);
        EventAttendance eventAttendance = eventAttendanceMapper.toEntity(eventAttendanceDTO);
        eventAttendance = eventAttendanceRepository.save(eventAttendance);
        return eventAttendanceMapper.toDto(eventAttendance);
    }

    /**
     * Get all the eventAttendances.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<EventAttendanceDTO> findAll(Pageable pageable) {
        log.debug("Request to get all EventAttendances");
        return eventAttendanceRepository.findAll(pageable)
            .map(eventAttendanceMapper::toDto);
    }


    /**
     * Get one eventAttendance by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<EventAttendanceDTO> findOne(Long id) {
        log.debug("Request to get EventAttendance : {}", id);
        return eventAttendanceRepository.findById(id)
            .map(eventAttendanceMapper::toDto);
    }

    /**
     * Delete the eventAttendance by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete EventAttendance : {}", id);
        eventAttendanceRepository.deleteById(id);
    }
}
