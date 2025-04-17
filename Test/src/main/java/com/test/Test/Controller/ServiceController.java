package com.test.Test.Controller;


import com.test.Test.Entity.ServiceModel;
import com.test.Test.Repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

        import java.util.List;

@RestController
@RequestMapping("/api/services")
@CrossOrigin("*")
public class ServiceController {

    @Autowired
    private ServiceRepository repository;

    @GetMapping
    public List<ServiceModel> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public ServiceModel create(@RequestBody ServiceModel service) {
        return repository.save(service);
    }
}
