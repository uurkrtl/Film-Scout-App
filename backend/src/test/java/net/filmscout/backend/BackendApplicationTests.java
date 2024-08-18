package net.filmscout.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

@SpringBootTest
@TestPropertySource(properties = {"themoviedb.api-key=dummy-key"})
class BackendApplicationTests {

    @Test
    void contextLoads() {
    }

}
