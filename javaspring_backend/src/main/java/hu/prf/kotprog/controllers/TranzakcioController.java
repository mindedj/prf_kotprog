package hu.prf.kotprog.controllers;

import hu.prf.kotprog.models.Tranzakcio;
import hu.prf.kotprog.models.TranzakcioService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping
@CrossOrigin(origins = "*")
public class TranzakcioController {
    TranzakcioService tranzakcioService;

    @Autowired
    public TranzakcioController(TranzakcioService tranzakcioService) {
        this.tranzakcioService = tranzakcioService;
    }

    @GetMapping(path="/tranzakcio")
    public List<Tranzakcio> getAllTranzakcio(){
        return this.tranzakcioService.getAllTranzakcio();
    }

    @PostMapping(path="/tranzakcio")
    public void createTranzakcio(@RequestBody Tranzakcio tranzakcio){
        this.tranzakcioService.createTranzakcio(tranzakcio);
    }
}
