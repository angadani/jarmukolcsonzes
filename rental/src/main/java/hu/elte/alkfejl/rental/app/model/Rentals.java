package hu.elte.alkfejl.rental.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import java.util.Date;


@Entity
@Table(name = "RENTALS")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Rentals extends BaseEntity {

    
    @Column(nullable = false)
    private String username;
    

    @Column(nullable = false)
    private String car;

    @Column(nullable = false)
    private Date dateFrom;

    @Column(nullable = false)
    private Date dateTo;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private State role;

    public enum State {
        OUT, DONE, EXPIRED
    }
}
