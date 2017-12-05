package hu.elte.alkfejl.rental.api;

import hu.elte.alkfejl.rental.app.model.Rentals;
import hu.elte.alkfejl.rental.service.RentalsService;
import hu.elte.alkfejl.rental.service.UserService;
import hu.elte.alkfejl.rental.service.annotations.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static hu.elte.alkfejl.rental.app.model.User.Role.ADMIN;
import static hu.elte.alkfejl.rental.app.model.User.Role.USER;

/**
 * @author Godzsák Dávid <godzsakdavid@gmail.com>
 */
@RestController
@RequestMapping("/api/rentals")
public class RentalsApiController {

    @Autowired
    private RentalsService rentalsService;

    @Autowired
    private UserService userService;

    @Role({ADMIN, USER})
    @GetMapping
    private ResponseEntity<Iterable<Rentals>> list() {
        Iterable<Rentals> rentals = rentalsService.listByRole(userService.getUser());
        return ResponseEntity.ok(rentals);
    }

    @Role({ADMIN, USER})
    @PostMapping
    private ResponseEntity<Rentals> create(@RequestBody Rentals rental) {
        Rentals saved = rentalsService.create(rental);
        return ResponseEntity.ok(saved);
    }

    @Role({ADMIN, USER})
    @GetMapping("/{id}")
    private ResponseEntity<Rentals> read(@RequestParam int id) {
        Rentals read = rentalsService.read(id);
        return ResponseEntity.ok(read);
    }

    @Role(ADMIN)
    @PutMapping("/{id}")
    private ResponseEntity<Rentals> update(@RequestParam int id, @RequestBody Rentals rental) {
        Rentals updated = rentalsService.update(id, rental);
        return ResponseEntity.ok(updated);
    }

    @Role(ADMIN)
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@RequestParam int id) {
        rentalsService.delete(id);
        return ResponseEntity.ok().build();
    }
}