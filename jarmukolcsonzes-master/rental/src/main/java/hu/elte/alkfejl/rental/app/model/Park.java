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
@Table(name = "PARK")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Park extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String parkname;

    @Column(nullable = false, unique = true)
    private String adress;

    @Column(nullable = false)
    private String cars;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, unique = true)
    private Role role;

    private enum Role {
        PREMIUM, STANDARD
    }
}
