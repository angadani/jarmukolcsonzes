
package hu.elte.alkfejl.rental.repository;

import hu.elte.alkfejl.rental.app.model.Rentals;
import hu.elte.alkfejl.rental.app.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author Godzsák Dávid <godzsakdavid@gmail.com>
 */
@Repository
public interface RentalRepository extends CrudRepository<Rentals, Integer> {
    List<Rentals> findAllByUser(User user);
}