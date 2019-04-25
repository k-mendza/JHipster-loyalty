package com.d3v4.loyalty.service;

import com.d3v4.loyalty.service.dto.EventAttendanceDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

/**
 * Service Interface for managing EventAttendance.
 */
public interface EventAttendanceService {

    /**
     * Save a eventAttendance.
     *
     * @param eventAttendanceDTO the entity to save
     * @return the persisted entity
     */
    EventAttendanceDTO save(EventAttendanceDTO eventAttendanceDTO);

    /**
     * Get all the eventAttendances.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<EventAttendanceDTO> findAll(Pageable pageable);


    /**
     * Get the "id" eventAttendance.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<EventAttendanceDTO> findOne(Long id);

    /**
     * Delete the "id" eventAttendance.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
