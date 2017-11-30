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

@Entity
@Table(name = "CARS")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Cars extends BaseEntity {

    @Column(nullable = false)
    private String make;
    
    @Column(nullable = false)
    private String model;
        
    @Column(nullable = false, unique = true)
    private String plate;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;

    private enum Status {
        IN, OUT
    }
}
