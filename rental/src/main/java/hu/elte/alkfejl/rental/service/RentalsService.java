package hu.elte.alkfejl.rental.service;

import hu.elte.alkfejl.rental.app.model.Rentals;
import hu.elte.alkfejl.rental.app.model.User;
import hu.elte.alkfejl.rental.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Collections;

/**
 * @author Godzsák Dávid <godzsakdavid@gmail.com>
 */
@Service
public class RentalsService {

    @Autowired
    private RentalRepository rentalRepository;

    public Iterable<Rentals> rentals() {
        return rentalRepository.findAll();
    }

    public Iterable<Rentals> listByRole(User user) {
        //TODO: kivenni
        if (user == null) {
            return rentalRepository.findAll();
        }
        User.Role role = user.getRole();
        if (role.equals(User.Role.USER)) {
            return rentalRepository.findAllByUser(user);
        } else if (role.equals(User.Role.ADMIN)) {
            return rentalRepository.findAll();
        }
        return Collections.emptyList();
    }

    public Rentals create(Rentals rental) {
        rental.setState(Rentals.State.OUT);
        rental.setDateFrom(Timestamp.valueOf(LocalDateTime.now()));
        return rentalRepository.save(rental);
    }

    public Rentals update(int id, Rentals rental) {
        Rentals currentRental = rentalRepository.findOne(id);

        currentRental.setState(rental.getState());
        return rentalRepository.save(currentRental);
    }

    public void delete(int id) {
        rentalRepository.delete(id);
    }

    public Rentals read(int id) {
        return rentalRepository.findOne(id);
    }

}