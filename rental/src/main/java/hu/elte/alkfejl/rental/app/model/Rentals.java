package hu.elte.alkfejl.rental.app.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import java.sql.Timestamp;
import java.sql.Date;
import java.time.LocalDateTime;
import java.util.List;


@Entity
@Table(name = "RENTALS")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Rentals extends BaseEntity {

    @JoinColumn
    @ManyToOne(targetEntity = User.class)
    private User user;
    

    @JoinColumn
    @OneToOne(targetEntity = Cars.class)
    private Cars car;

    @Column(nullable = false)
    private Timestamp dateFrom;

    @Column(nullable = false)
    private Date dateTo;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private State state;

    public enum State {
        OUT, DONE, EXPIRED
    }
}
