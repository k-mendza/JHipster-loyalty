package com.d3v4.loyalty.repository;

import com.d3v4.loyalty.domain.EventAttendance;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EventAttendance entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EventAttendanceRepository extends JpaRepository<EventAttendance, Long> {

}
